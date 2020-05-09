import { makeStyles, fade } from "@material-ui/core";

const useStylesGlobal = makeStyles(theme => ({
    grey: {
      color: fade(theme.palette.common.black, 0.54)
    }
}))

export default useStylesGlobal;

  
