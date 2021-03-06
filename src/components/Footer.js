import React from "react";
import "../css/footer.css";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutlineOutlined";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import ShuffleIcon from "@material-ui/icons/Shuffle";
import RepeatIcon from "@material-ui/icons/Repeat";
import { Grid, Slider } from "@material-ui/core";
import PlaylistPlayRoundedIcon from "@material-ui/icons/PlaylistPlayRounded";
import VolumeDownIcon from "@material-ui/icons/VolumeDown";

function Footer() {
  return (
    <div className="footer">
      <div className="footer__left">
        <img className="footer__albumLogo" src="https://upload.wikimedia.org/wikipedia/en/2/2f/Aenima.jpg" alt="" />
        <div className="footer__songInfo">
        <h4>Yeah!</h4>
        <p>Usher</p>
        </div>
      </div>
      <div className="footer__center">
        <ShuffleIcon className="footer__green" />
        <SkipPreviousIcon className="footer__icon" />
        <PlayCircleOutlineIcon fontSize="large" className="footer__icon" />
        <SkipNextIcon className="footer__icon" />
        <RepeatIcon className="footer__green" />
      </div>
      <div className="footer__right">
        {/*material ui grid container*/}
        <Grid container spacing={2}>
          <Grid item>
            <PlaylistPlayRoundedIcon />
          </Grid>
          <Grid item>
            <VolumeDownIcon />
            <Grid item xs></Grid>
            <Slider />
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default Footer;
