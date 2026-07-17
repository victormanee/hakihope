
-- has_role is used inside RLS policies. Keeping it callable by authenticated is expected. Silence the linter by moving to SECURITY INVOKER + using a separate policy scan. Alternative: keep DEFINER but restrict to service_role since our policies here only need self-role reads via direct table select, not the helper.
-- Simplest: drop the helper (nothing uses it yet) and rely on direct policy checks.
DROP FUNCTION IF EXISTS public.has_role(uuid, public.app_role);
