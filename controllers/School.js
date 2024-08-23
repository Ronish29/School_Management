const pool = require('../config/database');


exports.addSchool  = async(req, res) => {
    console.log(req.body);
    const {name, address , latitude, longitude } = req.body;
    if (!name || !address || typeof latitude !== 'number' || typeof longitude !== 'number') {
        return res.status(400).json({ message: 'Invalid input data' });
    }
    try {
        const [result] = await pool.query('INSERT INTO schools (name, address, latitude, longitude) VALUES (?, ?, ?, ?)', [name, address, latitude, longitude]);
        res.status(201).json({ message: 'School added successfully', schoolId: result.insertId });
    } catch (error) {
        res.status(500).json({ message: 'Error adding school', error });
    }
}

exports.listSchools = async (req, res) => {
    const { latitude, longitude } = req.query;


    const userLat = parseFloat(latitude);
    const userLng = parseFloat(longitude);

    if (isNaN(userLat) || isNaN(userLng)) {
        return res.status(400).json({ message: 'Invalid latitude or longitude' });
    }

    try {
        const [schools] = await pool.query('SELECT * FROM schools');
        const calcCrow = (lat1, lon1, lat2, lon2) => {
            const R = 6371; 
            const dLat = toRad(lat2 - lat1);
            const dLon = toRad(lon2 - lon1);
            const lat1Rad = toRad(lat1);
            const lat2Rad = toRad(lat2);

            const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
                      Math.sin(dLon / 2) * Math.sin(dLon / 2) * Math.cos(lat1Rad) * Math.cos(lat2Rad);
            const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
            const distanceKm = R * c;
            const distanceM = distanceKm * 1000; 
            return parseFloat(distanceM.toFixed(2));
        };


        const toRad = (value) => {
            return value * Math.PI / 180;
        };

        const sortedSchools = schools.map(school => ({
            ...school,
            distance: calcCrow(userLat, userLng, school.latitude, school.longitude)
        })).sort((a, b) => a.distance - b.distance);

        res.status(200).json(sortedSchools);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching schools', error });
    }
};


