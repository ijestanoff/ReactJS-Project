import { useGetWeather } from '../../hooks/useWeather';

export default function Schedule() {
    const threeDaysWeather = useGetWeather();

    return (
        <section className="schedule-section section-padding" id="section_4">
            <div className="container">
                <div className="row">
                    <div className="col-12 text-center">
                        <h2 className="text-white mb-4">Event Schedule</h2>
                        <div className="table-responsive">
                            <table className="schedule-table table table-dark">
                                <thead>
                                    <tr>
                                        <th scope="col">Date</th>
                                        <th scope="col">5:00 - 8:00 PM</th>
                                        <th scope="col">8:00 - 12:00 PM</th>
                                        <th scope="col">Weather Forecast</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">11<sup>th</sup>, Aug</th>
                                        <td className="table-background-image-wrap pop-background-image">
                                            <h3>Pop Night</h3>
                                            <div className="section-overlay" />
                                        </td>
                                        <td className="table-background-image-wrap rock-background-image">
                                            <h3>Rock &amp; Roll</h3>
                                            <div className="section-overlay" />
                                        </td>
                                        <td style={{ backgroundColor: '#ECC9C7' }} >
                                            <p>{threeDaysWeather[0]?.description}</p>
                                            <p>Min temp: {threeDaysWeather[0]?.tempmin}&#176;C</p>
                                            <p>Max temp: {threeDaysWeather[0]?.tempmax}&#176;C</p>
                                            <p>Humidity: {threeDaysWeather[0]?.humidity}%</p>
                                            <div className="section-overlay"></div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope="row">12<sup>th</sup>, Aug</th>
                                        <td style={{ backgroundColor: '#ECC9C7' }}>
                                            <h3>Free Styles</h3>
                                        </td>
                                        <td>
                                            <h3>DJ Night</h3>
                                        </td>
                                        <td style={{ backgroundColor: '#D9E3DA' }} >
                                            <p>{threeDaysWeather[1]?.description}</p>
                                            <p>Min temp: {threeDaysWeather[1]?.tempmin}&#176;C</p>
                                            <p>Max temp: {threeDaysWeather[1]?.tempmax}&#176;C</p>
                                            <p>Humidity: {threeDaysWeather[1]?.humidity}%</p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope="row">13<sup>th</sup>, Aug</th>
                                        <td className="table-background-image-wrap country-background-image">
                                            <h3>Country Music</h3>
                                            <div className="section-overlay" />
                                        </td>
                                        <td className="table-background-image-wrap rock-background-image">
                                            <h3>Rock &amp; Roll</h3>
                                            <div className="section-overlay" />
                                        </td>
                                        <td style={{ backgroundColor: '#ECC9C7' }}>
                                            <p>{threeDaysWeather[2]?.description}</p>
                                            <p>Min temp: {threeDaysWeather[2]?.tempmin}&#176;C</p>
                                            <p>Max temp: {threeDaysWeather[2]?.tempmax}&#176;C</p>
                                            <p>Humidity: {threeDaysWeather[2]?.humidity}%</p>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}