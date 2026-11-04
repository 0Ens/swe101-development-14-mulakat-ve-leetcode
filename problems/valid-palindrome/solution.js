export function isPalindrome(s){
    s = s.toLowerCase()
    s = s.replace(
        /[^a-z0-9]/g,'',
    )

    const s_array = [...s]
    s_array.reverse();
    const s_pal = s_array.join("")

    if ( s === s_pal ){
        return true
    }
    return false

}