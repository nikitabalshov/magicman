const petro = document.getElementById('Petro')
const oslo = document.getElementById('Oslo')
const macherata = document.getElementById('Macherata')

async function API(){
    const respons_petro = await fetch('https://api.open-meteo.com/v1/forecast?latitude=54.8667&longitude=69.15&current=temperature_2m&hourly=temperature_2m')
    const respons_oslo = await fetch('https://api.open-meteo.com/v1/forecast?latitude=43.2979&longitude=13.4529&current=temperature_2m&hourly=temperature_2m')
    const respons_macherata = await fetch('https://api.open-meteo.com/v1/forecast?latitude=55.8833&longitude=13.3167&current=temperature_2m&hourly=temperature_2m')
    const data_petro = await respons_petro.json()
    const data_oslo = await respons_oslo.json()
    const data_macherata = await respons_macherata.json()
    return [data_petro, data_oslo, data_macherata]
}   

async function output(){
    try{
        let out = await API()
        petro.textContent = `Probability of being captured by terminides: ${out[0].current.temperature_2m}`
        console.log(`Probability of being captured by terminides: ${out[0].current.temperature_2m}`)
        macherata.textContent = `Probability of being captured by terminides: ${out[2].current.temperature_2m}`
        oslo.textContent = `Probability of being captured by terminides: ${out[1].current.temperature_2m}`
    }
    catch(error){
        console.log(error)
    }
    finally{
        setTimeout(output, 10000)
    }
    
}
output()