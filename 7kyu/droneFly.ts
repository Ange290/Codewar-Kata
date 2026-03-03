export function flyBy(lamps: string, drone: string): string {

 let drones: number = drone.length;
   let res :string[]= [];
   let not :string[] =[];

    let lamp= lamps.split('');
  for(let x=0; x<lamp.length; x++){
      if(x < drones ){
         res.push(lamp[x].replace(lamp[x],'o'));
      }
    }
}