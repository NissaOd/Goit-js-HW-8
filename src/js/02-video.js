import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const onPlay = data => {
    localStorage.setItem('playerCurrentTime', data.seconds);
};

const currentTimePlay = Number(localStorage.getItem('playerCurrentTime'));

player.on('timeupdate', throttle(onPlay, 1000));

player.setCurrentTime(currentTimePlay || 0);
