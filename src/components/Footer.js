import React from 'react'
import '../css/footer.css'
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutlineOutlined';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import ShuffleIcon from '@material-ui/icons/Shuffle';
import RepeatIcon from '@material-ui/icons/Repeat';

function Footer() {
  return (
    <div className="footer">
    <div className="footer__left">
    <p>Album and song details</p>
    </div>
    <div className="footer__center">
    <ShuffleIcon className="footer__green" />
    <SkipPreviousIcon className="footer__icon" />
    <PlayCircleOutlineIcon fontSize="large" className="footer__green" />
    <SkipNextIcon className="footer__icon" />
    <RepeatIcon className="footer__green" />

    </div>
    <div className="footer__right">
    <p>Volume controls</p>

    </div>
    </div>
  )
}

export default Footer
