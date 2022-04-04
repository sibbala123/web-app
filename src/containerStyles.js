import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
    },

  },
  header: {
    
    width:'100%',
    padding:'10px 10px 10px 10px',
    borderBottom:'solid 2px #6B6B6B',
    borderRadius:'3px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    
  },
  paper: {
    padding: theme.spacing(2),
    width:'75%',
    
    position:'relative',
    margin:'120px 20px 20px 120px',
    border:'2px solid #6B6B6B',
    borderRadius: '5px'
  },
  form: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
 
  flexLayout: {
    width:'100%',
    margin: '15px 0',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
   
  },
  label:{
    fontWeight: '100',
    color:'blue'
  },
 template : {
position:'absolute',
right:'0'
  },
  buttonSubmit: {
   height:'50%'
  },
}));