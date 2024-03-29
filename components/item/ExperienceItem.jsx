import React from 'react'

const ExperienceItem = ({ item }) => {
  return (
    <div className={`w-full m-auto ${item.id === 1 && 'mb-[80px] lg:mb-[100px]'}`}>
      <div>
        <p className="text-sm lg:text-tiny text-gray-500">{item.period_date}</p>
        <h2 className="flex items-center text-1xl lg:text-3xl font-bold text-gray-700">
          <div className="h-6 w-1.5 bg-red-400 mr-2" />
          {item.company}
        </h2>
        <div className="leading-4 lg:leading-5">
          {item.work.map((els, index) => {
            return (
              <div className="flex text-tiny lg:text-lg my-2 text-gray-500/75" key={`info_${index}`}>
                - <span className="ml-2">{els.info}</span>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default ExperienceItem
