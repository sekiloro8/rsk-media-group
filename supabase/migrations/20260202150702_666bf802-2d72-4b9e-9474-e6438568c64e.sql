-- Add explicit SELECT policy that denies public reads on quote_requests
-- Only service_role can read quote requests (already exists for ALL operations)
-- This makes it explicit that regular users cannot SELECT from this table

-- First, let's add a restrictive SELECT policy that explicitly blocks public access
-- The existing "Service role can manage quote requests" policy handles service_role access
CREATE POLICY "Deny public read access to quote requests"
ON public.quote_requests
FOR SELECT
TO public, anon, authenticated
USING (false);