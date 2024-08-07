import { useGetFestivalData } from '../../hooks/useFestival';
import { useGetFirstArtists } from '../../hooks/useArtists';
import { useGetWeather } from '../../hooks/useWeather';
import { convertDate } from '../../utils/dateUtils';

const initialValues = {
    startDay: '',
    startMonth: '',
    startYear: '',
    firstDayMorning: '',
    firstDayNight: '',
    secondDayMorning: '',
    secondDayNight: '',
    thirdDayMorning: '',
    thirdDayNight: '',
};

const monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
];

export default function Schedule() {
    const getWeather = useGetWeather().days;
    const [festival] = useGetFestivalData();
    const [artists] = useGetFirstArtists();

    const value = festival[0] || initialValues;

    // seconds * minutes * hours * milliseconds = 1 day 
    const day = 60 * 60 * 24 * 1000;
    const firstDay = new Date(value.startYear, value.startMonth - 1, value.startDay);
    const secondDay = new Date(firstDay.getTime() + day);
    const thirdDay = new Date(secondDay.getTime() + day);

    const firstDayWeather = getWeather?.find(day => day.datetime == convertDate(firstDay));
    const secondDayWeather = getWeather?.find(day => day.datetime == convertDate(secondDay));
    const thirdDayWeather = getWeather?.find(day => day.datetime == convertDate(thirdDay));

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
                                        <th scope="col">12:00 AM - 6:00 PM</th>
                                        <th scope="col">6:00 PM - 12:00 PM</th>
                                        <th scope="col">Weather Forecast</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">{firstDay.getDate()}<sup>th</sup>, {monthNames[firstDay.getMonth()]}</th>
                                        <td className="table-background-image-wrap pop-background-image">
                                            <h3>{value.firstDayMorning}</h3>
                                            <p>By {artists[0]?.name}</p>
                                            {/* <div className="section-overlay" /> */}
                                        </td>
                                        <td className="table-background-image-wrap rock-background-image">
                                            <h3>{value.firstDayNight}</h3>
                                            <p>By {artists[1]?.name}</p>
                                            {/* <div className="section-overlay" /> */}
                                        </td>
                                        <td style={{ backgroundColor: '#ECC9C7' }} >
                                            <p>{firstDayWeather?.description}</p>
                                            <p>Min temp: {firstDayWeather?.tempmin}&#176;C</p>
                                            <p>Max temp: {firstDayWeather?.tempmax}&#176;C</p>
                                            <p>Humidity: {firstDayWeather?.humidity}%</p>
                                            <div className="section-overlay"></div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope="row">{secondDay.getDate()}<sup>th</sup>, {monthNames[secondDay.getMonth()]}</th>
                                        <td style={{ backgroundColor: '#ECC9C7' }}>
                                            <h3>{value.secondDayMorning}</h3>
                                            <p>By {artists[2]?.name}</p>
                                            {/* <div className="section-overlay" /> */}
                                        </td>
                                        <td>
                                            <h3>{value.secondDayNight}</h3>
                                            <p>By {artists[3]?.name}</p>
                                            {/* <div className="section-overlay" /> */}
                                        </td>
                                        <td style={{ backgroundColor: '#D9E3DA' }} >
                                            <p>{secondDayWeather?.description}</p>
                                            <p>Min temp: {secondDayWeather?.tempmin}&#176;C</p>
                                            <p>Max temp: {secondDayWeather?.tempmax}&#176;C</p>
                                            <p>Humidity: {secondDayWeather?.humidity}%</p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope="row">{thirdDay.getDate()}<sup>th</sup>, {monthNames[thirdDay.getMonth()]}</th>
                                        <td className="table-background-image-wrap country-background-image">
                                            <h3>{value.thirdDayMorning}</h3>
                                            <p>By {artists[4]?.name}</p>
                                            <div className="section-overlay" />
                                        </td>
                                        <td className="table-background-image-wrap rock-background-image">
                                            <h3>{value.thirdDayNight}</h3>
                                            <p>By {artists[5]?.name}</p>
                                            <div className="section-overlay" />
                                        </td>
                                        <td style={{ backgroundColor: '#ECC9C7' }}>
                                            <p>{thirdDayWeather?.description}</p>
                                            <p>Min temp: {thirdDayWeather?.tempmin}&#176;C</p>
                                            <p>Max temp: {thirdDayWeather?.tempmax}&#176;C</p>
                                            <p>Humidity: {thirdDayWeather?.humidity}%</p>
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