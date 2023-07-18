const seatsavailibilityform=document.getElementById('seatsavailibilityform')
const seatsbookingform=document.getElementById('seatsbookingform')


seatsavailibilityform.addEventListener('submit',(e)=>{
   e.preventDefault();
    
    const seatsrequired=e.target.noOfSeats.value
   
    axios.post("http://localhost:3000/api/seats/availability",{seatsrequired:seatsrequired})
    .then((response)=>{
        let count=0
        for(let i=0;i<seatsrequired;i++){
            const name=document.createElement('input');
            name.setAttribute('type','text')
            name.setAttribute('name',`name_${count}`)
            name.style.display='block'
            name.className='names';
            seatsbookingform.appendChild(name)
            count++;
        }
      
    })
   
})
seatsbookingform.addEventListener('submit',(e)=>{
   e.preventDefault();

   const startSeat=e.target.startSeat.value;
   const endSeat=e.target.endSeat.value;
 
   let name=[]

   for(let i=0;i<20;i++){
    let value1=`name_${i}`
    if(e.target.name_1!=undefined){
        console.log('hi')
        name.push(e.target.value.value)
    }
    else{
        break;
    }
   }
   
    axios.post("http://localhost:3000/api/seats/book",{startSeat:startSeat,endSeat:endSeat,name:name})
    .then((response)=>{

    })
    .catch(()=>{

    })
})


