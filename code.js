# Jogo-da-velha

import React,{useState} from 'react'

export default function App() {

// Jogodavelha

const.tabu={
    display: 'flex', 
      flexDirection:'column'
}
const.tabuLinha={
    display: 'flex', 
    flexDirection:'row'
}
const.casa={
    width:100,
    heigh:100,
    display:'flex', 
    justifyContent:'center',
    alignItems:'center'
    flexDirection: 'row', 
    get flexDirection() {
        return this._flexDirection
    },
    set flexDirection(value) {
        this._flexDirection = value
    },
    cursor:'pointer', 
    fontSize:60,
    border:'1px solid #000'
}

{
 const jogoinicial=[['','',''],['','',''],['','','']]
 const [jogo,setJogo]=useState(['','',''],['','',''],['','',''])
 const[simboloAtual,setSimboloAtual]=useStates('X')
 const [jogando,setJogando]=useState(true)

 const tabuleiro=(j)=> {
 
    return (

       <div> style={tabu}></div>

        <div style= (tabuLinha)>
        <div style={casa} data-pos='00' onClick={(e)=>Jogar(e)}>(j[0][0])</div>
        <div style={casa} data-pos='01' onClick={(e)=>Jogar(e)}>(j[0][1])</div>
        <div style={casa} data-pos='02' onClick={(e)=>Jogar(e)}>(j[0][2])</div>  
            
        </div>
            
        <div> style= (tabuLinha)>
        <div style={casa} data-pos='10' onClick={(e)=>Jogar(e)}>(j[0][0])</div>
        <div style={casa} data-pos='11' onClick={(e)=>Jogar(e)}>(j[1][1])</div>
        <div style={casa} data-pos='12' onClick={(e)=>Jogar(e)}>(j[1][2])</div>  
         
        </div>

         <div> style= (tabuLinha)>
        <div style={casa} data-pos ='20' onClick={(e)=>Jogar(e)}>(j[2][0])</div>
        <div style={casa} data-pos ='21' onClick={(e)=>Jogar(e)}>(j[2][1])</div>
        <div style={casa} data-pos ='22' onClick={(e)=>Jogar(e)}>(j[2][2])</div>  
       
    </div>
       
</div>
        )

}
  const BtnJogarNovamente=()=>{
     if(jogando)
      return <button onClick={()}>Jogar Novamente</button>

  }


 const verificaVitoria=()=>(
     //linhas
     let pontos=0
     let vitoria=false 
     for(LET 1=0;1<3;1++){
         pontos=0;
     for(let c=0,c<3;c++){
         if (jogo[1][c]==simboloAtual){
             ponto++
     }
  }

if (pontos >= 3){
   vitoria=true
   break
   return
  }
}

//colunas
for (let c=0;c<3;c++){
    if (jogo[1][c]==simboloAtual){
        pontos++
    }
   }
     if (pontos >= 3)
      vitoria=true
      break
      return
     }
    
 //diagonais
 pontos=0
 for(let d=0;d<3;d++){
     if (jogo[d][d][d]){jogo[1][c]==simboloAtual){
        pontos++
     }
   }  
 }
 if (pontos >=3){
    vitoria=true
    break
    
 }
  pontos=0
  let 1=0
  for(let c=2;c>=0,c--){
      if(jogo[1][c]==simboloAtual){
          pontos++
      }
      1++
  }
  if (pontos >=3){
      vitoria=true
  
  return vitoria
  

  const trocaJogador=='X'?setSimboloAtual('O'):setSimboloAtual('X'))

  }

  const retPos=(e)=>{
      const p=e.target.getAttribute('data-pos')
      const pos=[parseInt(p.subtring(0,1)),parseInt(p.subtring(1,2))]
      return pos
  }

const verificaEspacoVazio=(e)=>{
    if(jogo[retPos(e)[0]][retPos(e)[1]]==''){
        return true
        else
          return false
    }
  }

const jogar=(e)=>
if (jogando)
  if(verificaEspacoVazio(e)){
      jogo[retPos(e)[0]retPost(e)[1]]=simboloAtual
      trocaJogador()
      if (verificaVitoria()){
          trocaJogador()
          alert('Jogador' + simboloAtual + 'venceu!')
          setJogando(false)
        }
    }

  else
  
{
      alert('Este espaço não está disponível')
}
  
  {

    const reiniciar=()=>{
      setJogando(true)
      setJogo(jogoInicial)
      setSimboloAtual('X')



    }
  return (
    
    <>

    <div>
    <p>Quem joga: {simboloAtual}</p>
    </div>
    <div>
        {tabuleiro(jogo)}
    </div>
     <div>
         {BtnJogarNovamente()}
     </div>
      
    </>

     );
  
}

