// lib/supabaseClient.js

import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://maktoxmmrysowxsdggsn.supabase.co' // yeh tumhara Supabase URL
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1ha3RveG1tcnlzb3d4c2RnZ3NuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTM2MjUxODMsImV4cCI6MjA2OTIwMTE4M30.ME2_fYBL7nZjL93yCvQXzX3XxDUTdAlkuPztxa0mjqk' // yeh tumhara anon key

export const supabase = createClient(supabaseUrl, supabaseKey)
