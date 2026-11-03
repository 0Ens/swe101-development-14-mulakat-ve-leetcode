export function isAnagram(s,t){
    const first = s.split('');
    const second = t.split('');
    const newF = first.sort()
    const newS = second.sort()
    if (newF.toString() === newS.toString()){
        return true
    }
    return false
}
