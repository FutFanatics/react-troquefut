import './../css/style.css';
import iconVideoClique from '../img/icon-video.png'
import pontilhado from '../img/pontilhado.png'
import Video from './video';
import YouTube from './video';

interface VideocliqueProps {
    className?: string;
  }

const Videoclique : React.FC<VideocliqueProps> = ({ className }) => {
    return(
        <div className="c-video_clique d-flex justify-content-center align-items-center">
            <img className='icon-video' src={iconVideoClique}/>
            <img className='icon-pontilhado' src={pontilhado}/>
            <YouTube videoId="s5x8fHVkDrw?si=kxfw1rb85olqutE2"></YouTube>
        </div>
    )

}
export default Videoclique;