import { Stack, Typography, FormControl, TextField, Button } from "@mui/material"
const HandleNewsLetter =()=>{
  return(
    <>
    <Stack sx={{m:8}}>
      <Stack>
        <Typography variant="h2"sx={{textAlign:"center", textTransform: "capitalize", margin: 4}}>
          Keep in touch
        </Typography>
        <Typography variant="body2" sx={{textAlign:"center", margin: 1}}>
            Sign up to receve the latest updates from us on the best offers and new trips available. 
        </Typography>
      </Stack>
      <FormControl sx={{direction:"row", alignItems: "center", justifyContent:"center"}}>
         <TextField id="email" label="email" variant="outlined" placeholder="email@gmail.com" sx={{width:"20rem"}}/>
         <Button sx={{mt:1}}>Sign up</Button>
      </FormControl>
    </Stack>
    </>
  )
}

export default HandleNewsLetter;