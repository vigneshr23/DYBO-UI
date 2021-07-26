/**
 * API to create/update User
 * @param {*} payload 
 * @returns Promise with Json data
 */
export async function createUser(payload) {
    const URI = 'http://13.235.55.43/test/api/create_user';
    const {firstName: first_name, lastName: last_name, ...formdata} = payload
    const reqPayload = {first_name, last_name, ...formdata}
    const options = {
        method: "POST",
        body: JSON.stringify(reqPayload),
        headers: {
            'Content-Type': 'application/json'
        }
    }
    const response = await fetch(URI, options)
    if (response.ok) {
        return await response.json()
    } else {
        throw Error('400: Client Error')
    }
}