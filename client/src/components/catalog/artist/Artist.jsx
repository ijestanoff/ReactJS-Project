import { Link } from 'react-router-dom';

export default function Artist({
    _id,
    name,
    birthday,
    music,
    youTubeChannel,
    imageUrl,
    summary,
}) {
    return (
        <div className="col-lg-5 col-12">
            <div className="artists-thumb">
                <div className="artists-image-wrap">
                    <img src={imageUrl} className="artists-image img-fluid" />
                </div>
                <div className="artists-hover">
                    <p>
                        <strong>Name:</strong>
                        {name}
                    </p>
                    <p>
                        <strong>Birthdate:</strong>
                        {birthday}
                    </p>
                    <p>
                        <strong>Music:</strong>
                        {music}
                    </p>
                    <hr />
                    <p className="mb-0">
                        <strong>Youtube Channel:</strong>
                        <Link to="http://youtube.com">{youTubeChannel}</Link>
                    </p>
                </div>
            </div>
        </div>
    );
}


// export default function GameListItem({
//     _id,
//     title,
//     category,
//     imageUrl
// }) {
//     return (
//         <div className="allGames">
//             <div className="allGames-info">
//                 <img src={imageUrl} />
//                 <h6>{category}</h6>
//                 <h2>{title}</h2>
//                 <Link to={`/games/${_id}/details`} className="details-button">Details</Link>
//             </div>
//         </div>
//     );
// }