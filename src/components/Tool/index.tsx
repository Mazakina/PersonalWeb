import styles from './tool.module.scss'

interface toolProps{
  imgArray: string[]
}

export default function Tool({imgArray}:toolProps) {
  const toolsIcons = [{
    id:'reactJs',
    img:'/images/reactpure.svg'
  },{
    id:'js',
    img:'/images/JavaS.svg'
  },{
    id:'html',
    img:'/images/html.svg'
  },{
    id:'nextJs',
    img:'/images/next-js.svg'
  },{
    id:'stripe',
    img:'/images/stripe.svg'
  },{
    id:'typescript',
    img:'/images/typescript.svg'
  }]
  const newArray = toolsIcons.filter((icon) => {
    return(
      imgArray.includes(icon.id)
    )
  })
  return(
    <div >
      {
        newArray.map((tool)=>{
          return(
            <div key={tool.id} className={styles.tool}>
              <img src={tool.img} alt={tool.id} />
            </div>
          )
        })
      }
    </div>
  )
}