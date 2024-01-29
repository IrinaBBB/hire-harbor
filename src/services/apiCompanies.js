import supabase from './supabase.js'

export async function getCompanies() {
    let { data, error } = await supabase.from('Companies').select('*')
    if (error) {
        console.log(error)
        throw new Error('Companies could not be loaded')
    }

    return data
}


export async function deleteCompany(id) {
    const { data, error } = await supabase.from('Companies').delete().eq('company_id', id)
    if (error) {
        console.log(error)
        throw new Error('Company could not be deleted')
    }
    return data
}