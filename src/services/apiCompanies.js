import supabase from './supabase.js'

export async function getCompanies() {
    let { data, error } = await supabase.from('Companies').select('*')
    if (error) {
        console.log(error)
        throw new Error('Companies could not be loaded')
    }

    return data
}