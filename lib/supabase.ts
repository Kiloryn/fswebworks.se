import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://cswpxdtvyenijojkcubi.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNzd3B4ZHR2eWVuaWpvamtjdWJpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzA3MTk0NTAsImV4cCI6MjA4NjI5NTQ1MH0.vXKGan4p_5TYHBF63LbkA2PuXqLzZu3FcF2sD3kBpss';

export const supabase = createClient(supabaseUrl, supabaseKey);
