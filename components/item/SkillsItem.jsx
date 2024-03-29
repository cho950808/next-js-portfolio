import React from 'react'

const SkillsItem = (props) => {
  const { item } = props

  return (
    <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-100">
      <div className="grid grid-cols-1 gap-3 justify-center items-center">
        <div className="m-auto overflow-hidden h-[25px] w-[25px] lg:h-[50px] lg:w-[50px]">
          <img src={item.skill_image} className="h-full w-full" alt={item?.image_alt} />
        </div>
        <div className="flex flex-col justify-center items-center font-bold text-[11px] lg:text-tiny">
          <p className="whitespace-pre-wrap lg:whitespace-normal text-center lg:text-left">{item.framework}</p>
        </div>
      </div>
    </div>
  )
}

export default SkillsItem
