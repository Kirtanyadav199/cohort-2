import box from "./box.js"
import circle from "./circle.js"


let parent = ()=> 
    {
        return React.createElement('div',{id:'parent'},[box(),circle()])
    }

export default parent