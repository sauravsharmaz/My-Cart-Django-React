import React from 'react'

function Rating({value}) {
    let val= value
    let str_val= val.toString()
    let arr_val= str_val.split('.')
    let main_val= parseInt(arr_val[0])
    let sub_val= parseInt(arr_val[1])

    let rating_class= []

    for (let i = 0; i < main_val; i++) {
        rating_class.push("fas fa-star")
    }

    if (sub_val <= 5 && sub_val>=1){
        rating_class.push("fas fa-star-half")
    }else if(sub_val <= 9 && sub_val>=6){
        rating_class.push("fas fa-star-half-alt")
    }

    return (
        <span>
            {rating_class.map(function (cls,indx){
                return (
                    <i key={indx} id='rating-tag' className={cls}></i>
                )
            })}
        </span>
    )
}

export default Rating








