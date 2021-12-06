import Typography from "@material-ui/core/Typography";
import { useHistory } from 'react-router-dom';



export default function PageNotFound() {
    const history = useHistory()

    return (
      <>
        <Typography
          variant="h4"
          gutterBottom
          component="div"
          color="primary"
          fontWeight="bold"
          style={{ paddingTop: "20%" }}
          align="center"
        >
          404 - Page Not Found!!!!
        </Typography>
      
        <Typography
          variant="h6"
          display="block"
          gutterBottom
          color="primary"
          align="center"
        >
          Go Back to
        </Typography>
        <Typography
          variant="button"
          display="block"
          gutterBottom
          color="primary"
          align="center"
          onClick={() => history.push("/")}
        >
          HomePage
          </Typography>
       
      </>
    );
}