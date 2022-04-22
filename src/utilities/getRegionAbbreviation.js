const getRegionAbbreviation = (reg) => {
	const USA = [
		"East",
		"Central",
		"West-Denver",
	]

	const LATAM = [
		"Argentina",
		"Colombia"
	]

	const EUR = [
		"Europe"
	]

	if (USA.includes(reg)) {
		return 'USA';
	}
	if (LATAM.includes(reg)) {
		return 'LAT';
	}
	if (EUR.includes(reg)) {
		return 'EUR';
	}
	return reg;
};

export default getRegionAbbreviation;
