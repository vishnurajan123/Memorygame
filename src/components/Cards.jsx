import React, { useState,useRef } from 'react'
import Cardd from './Cardd'

function Cards() {
    const [cards,setCards]=useState([
        {id:0,name:"Walter white",status:"",img:"https://c4.wallpaperflare.com/wallpaper/270/151/624/breaking-bad-actors-bryan-cranston-walter-white-men-with-glasses-2992x4016-animals-horses-hd-art-wallpaper-preview.jpg"},
        {id:0,name:"Walter white",status:"",img:"https://c4.wallpaperflare.com/wallpaper/270/151/624/breaking-bad-actors-bryan-cranston-walter-white-men-with-glasses-2992x4016-animals-horses-hd-art-wallpaper-preview.jpg"},
        {id:1,name:"Jesse pinkman",status:"",img:"https://images.alphacoders.com/543/543496.jpg"},
        {id:1,name:"Jesse pinkman",status:"",img:"https://images.alphacoders.com/543/543496.jpg"},
        {id:2,name:"Gus fring",status:"",img:"https://images.news18.com/ibnlive/uploads/2021/10/gus-fring--16336703954x3.jpg"},
        {id:2,name:"Gus fring",status:"",img:"https://images.news18.com/ibnlive/uploads/2021/10/gus-fring--16336703954x3.jpg"},
        {id:3,name:"Saul goodman",status:"",img:"https://images.alphacoders.com/568/568432.jpg"},
        {id:3,name:"Saul goodman",status:"",img:"https://images.alphacoders.com/568/568432.jpg"},
        {id:4,name:"Salamanka",status:"",img:"https://oyster.ignimgs.com/mediawiki/apis.ign.com/breaking-bad/4/4b/Hector_Salamanca.jpg"},
        {id:4,name:"Salamanka",status:"",img:"https://oyster.ignimgs.com/mediawiki/apis.ign.com/breaking-bad/4/4b/Hector_Salamanca.jpg"},
        {id:5,name:"Hanks",status:"",img:"https://oyster.ignimgs.com/mediawiki/apis.ign.com/breaking-bad/4/45/Hank_Schrader.jpg"},
        {id:5,name:"Hanks",status:"",img:"https://oyster.ignimgs.com/mediawiki/apis.ign.com/breaking-bad/4/45/Hank_Schrader.jpg"},
        {id:6,name:"Skyler",status:"",img:"https://upload.wikimedia.org/wikipedia/en/f/fb/Skyler_White_S5B.png"},
        {id:6,name:"Skyler",status:"",img:"https://upload.wikimedia.org/wikipedia/en/f/fb/Skyler_White_S5B.png"},
        {id:7,name:"Jane",status:"",img:"https://i.pinimg.com/originals/df/f1/24/dff124d07356fc1201efea9bd3f3b51a.jpg"},
        {id:7,name:"Jane",status:"",img:"https://i.pinimg.com/originals/df/f1/24/dff124d07356fc1201efea9bd3f3b51a.jpg"}

    ].sort(()=>Math.random() -.5))
    const [previosCardState,setPreviosCardState]=useState(-1)
    const previosIndex=useRef(-1)
    const matchCheck=(currentCard)=>{

        if(cards[currentCard].id===cards[previosCardState].id){
            cards[previosCardState].status='active matched'
            cards[currentCard].status='active matched'
            setPreviosCardState(-1)
        }else{
            cards[currentCard].status='active'
            setCards([...cards])
            setTimeout(()=>{
                setPreviosCardState(-1)
                cards[currentCard].status='unmatch'
                cards[previosCardState].status='unmatch'
                setCards([...cards])
            },1000)
        }

    }
    const clickHandler=(index)=>{

        if(index!==previosIndex.current){
            if(cards[index].status==='active matched'){
                alert("already matched")
            }else{
                if(previosCardState===-1){
                    previosIndex.current=index
                    cards[index].status='active'
                    setCards([...cards])
                    setPreviosCardState(index)
                }else{
                    matchCheck(index)
                    previosIndex.current=-1
                }
            }

        }else{
            alert("Card currently selected ")
        }
    }
    const reset=()=>{
        window.location.reload()
        
    }

  return (
    <div className='flex'>
        <div className='container'>
            {cards.map((card,index)=>{
                return <Cardd card={card} key={index} index={index} clickHandler={clickHandler}/>
    
            })}
    
        </div>
        <div className='reset'>
            <input  onClick={()=>reset()} type="reset" value="Reset" />
        </div>
    </div>
  )
}

export default Cards