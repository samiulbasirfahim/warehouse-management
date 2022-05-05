import React, { useEffect, useState } from 'react';

const useLoadSingleCar = (carId) => {
    const [car, setCar] = useState()
	useEffect(() => {
		fetch("https://quiet-mesa-05314.herokuapp.com/car/" + carId)
			.then((res) => res.json())
			.then((data) => setCar(data))
	}, [])
      return {car, setCar}
};

export default useLoadSingleCar;