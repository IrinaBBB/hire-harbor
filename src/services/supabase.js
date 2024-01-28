import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://owcoyjahzdsxoyuwmjoz.supabase.co'
const supabaseKey =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im93Y295amFoemRzeG95dXdtam96Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDY0NzI2MDcsImV4cCI6MjAyMjA0ODYwN30.uB2nXHZOPp-JfVZCHKLjPFqCEmNWzYtlksB_Hs20EVE'
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase
