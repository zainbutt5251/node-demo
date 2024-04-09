const {UserModal}=require('../Model/LoadModals');
const {ServiceHandler}=require('../_utils/handle');


const GET=async(req)=>{

}

module.export={
    GET:(req,res)=>ServiceHandler(GET,req,res),
}