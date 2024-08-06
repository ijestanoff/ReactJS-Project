import Artist from './artist/Artist';

import { useGetAllArtists } from '../../hooks/useArtists';

export default function Catalog() {
    const [artists] = useGetAllArtists();

    return (
        <section className="artists-section section-padding" id="catalog">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12 text-center">
                        <h2 className="mb-4">Meet Artists</h2>
                    </div>

                    {artists.length > 0
                        ? artists.map(artist => <Artist {...artist} key={artist._id} />)
                        : <h3 className="no-articles">No artists yet</h3>
                    }
                </div>
            </div>
        </section>
    );
}