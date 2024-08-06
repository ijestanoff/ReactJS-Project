import { Link } from 'react-router-dom';

export default function Artist({
    _id,
    name,
    birthday,
    music,
    imageUrl,
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
                        <strong>More Info:</strong>
                        <Link to={`/catalog/${_id}/details`}>Details</Link>
                    </p>
                </div>
            </div>
        </div>
    );
}