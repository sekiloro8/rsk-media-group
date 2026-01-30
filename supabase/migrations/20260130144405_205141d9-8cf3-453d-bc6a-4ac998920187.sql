-- Create product categories table
CREATE TABLE public.product_categories (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  description TEXT,
  icon TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create products table
CREATE TABLE public.products (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  category_id UUID REFERENCES public.product_categories(id) ON DELETE CASCADE,
  name TEXT NOT NULL,
  description TEXT,
  base_price DECIMAL(10,2),
  image_url TEXT,
  features TEXT[],
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create quote requests table (no auth required for public submissions)
CREATE TABLE public.quote_requests (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  product_id UUID REFERENCES public.products(id) ON DELETE SET NULL,
  product_name TEXT NOT NULL,
  customer_name TEXT NOT NULL,
  customer_email TEXT NOT NULL,
  customer_phone TEXT,
  company_name TEXT,
  quantity INTEGER NOT NULL DEFAULT 1,
  specifications JSONB,
  message TEXT,
  status TEXT NOT NULL DEFAULT 'pending',
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS on all tables
ALTER TABLE public.product_categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.products ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.quote_requests ENABLE ROW LEVEL SECURITY;

-- Product categories: Public read access
CREATE POLICY "Anyone can view product categories"
ON public.product_categories
FOR SELECT
USING (true);

-- Products: Public read access
CREATE POLICY "Anyone can view products"
ON public.products
FOR SELECT
USING (true);

-- Quote requests: Anyone can submit (public form)
CREATE POLICY "Anyone can submit quote requests"
ON public.quote_requests
FOR INSERT
WITH CHECK (true);

-- Quote requests: Only service role can view/manage (via edge function or admin)
CREATE POLICY "Service role can manage quote requests"
ON public.quote_requests
FOR ALL
USING (auth.role() = 'service_role');

-- Create updated_at trigger for quote_requests
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER update_quote_requests_updated_at
BEFORE UPDATE ON public.quote_requests
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

-- Insert initial product categories
INSERT INTO public.product_categories (name, description, icon) VALUES
('Business Cards & Stationery', 'Professional business cards, letterheads, envelopes, and corporate stationery', 'CreditCard'),
('Marketing Materials', 'Flyers, brochures, banners, posters, and promotional materials', 'Megaphone'),
('Labels & Stickers', 'Product labels, vinyl stickers, custom decals, and packaging labels', 'Tag'),
('Large Format Printing', 'Billboards, signboards, vehicle wraps, and exhibition displays', 'Maximize');

-- Insert sample products
INSERT INTO public.products (category_id, name, description, base_price, features) VALUES
((SELECT id FROM public.product_categories WHERE name = 'Business Cards & Stationery'), 'Premium Business Cards', 'High-quality business cards with various finishes', 250.00, ARRAY['Matte/Glossy finish', 'Double-sided printing', 'Custom sizes available', 'Spot UV options']),
((SELECT id FROM public.product_categories WHERE name = 'Business Cards & Stationery'), 'Corporate Letterheads', 'Professional letterheads for official correspondence', 350.00, ARRAY['Premium paper stock', 'Full color printing', 'Watermark options', 'Bulk discounts']),
((SELECT id FROM public.product_categories WHERE name = 'Business Cards & Stationery'), 'Custom Envelopes', 'Branded envelopes in various sizes', 200.00, ARRAY['Multiple sizes', 'Window options', 'Self-seal available', 'Color printing']),
((SELECT id FROM public.product_categories WHERE name = 'Marketing Materials'), 'Flyers & Leaflets', 'Eye-catching flyers for promotions and events', 150.00, ARRAY['A4/A5/DL sizes', 'Gloss or matte', 'Same day printing', 'Folding options']),
((SELECT id FROM public.product_categories WHERE name = 'Marketing Materials'), 'Brochures', 'Professional brochures for business presentations', 450.00, ARRAY['Tri-fold/Bi-fold', 'Premium paper', 'Custom sizes', 'Spot colors']),
((SELECT id FROM public.product_categories WHERE name = 'Marketing Materials'), 'Roll-up Banners', 'Portable banners for events and exhibitions', 850.00, ARRAY['Various sizes', 'Easy setup', 'Durable materials', 'Carry case included']),
((SELECT id FROM public.product_categories WHERE name = 'Marketing Materials'), 'Posters', 'High-impact posters for advertising', 120.00, ARRAY['A0 to A4 sizes', 'Indoor/Outdoor options', 'Lamination available', 'Quick turnaround']),
((SELECT id FROM public.product_categories WHERE name = 'Labels & Stickers'), 'Product Labels', 'Custom labels for product packaging', 180.00, ARRAY['Die-cut shapes', 'Waterproof options', 'Barcode printing', 'Roll or sheet']),
((SELECT id FROM public.product_categories WHERE name = 'Labels & Stickers'), 'Vinyl Stickers', 'Durable vinyl stickers for any surface', 220.00, ARRAY['Weather resistant', 'Custom shapes', 'Matte or gloss', 'Easy application']),
((SELECT id FROM public.product_categories WHERE name = 'Labels & Stickers'), 'Vehicle Graphics', 'Professional vehicle branding and wraps', 2500.00, ARRAY['Full or partial wrap', 'Design included', 'Professional installation', '3-5 year durability']),
((SELECT id FROM public.product_categories WHERE name = 'Large Format Printing'), 'Billboard Design & Print', 'Large format billboards for maximum impact', 5000.00, ARRAY['Various sizes', 'Weather resistant', 'Installation support', 'Design services']),
((SELECT id FROM public.product_categories WHERE name = 'Large Format Printing'), 'Signboards', 'Indoor and outdoor signage solutions', 1200.00, ARRAY['Illuminated options', 'Multiple materials', 'Custom sizes', 'Installation included']),
((SELECT id FROM public.product_categories WHERE name = 'Large Format Printing'), 'Exhibition Stands', 'Complete exhibition display solutions', 3500.00, ARRAY['Modular designs', 'Easy transport', 'Reusable', 'Quick setup']);