function twoSum(nums,target){
    for (let i=0; i <=nums.length-1; i++){
        let expected = target - nums[i]
        for (let x=i+1; x <=nums.length-1; x++){
            if(expected === nums[x])
                return [i,x]
    }

}        

}

