export const shortenAddress = (address: string, chars = 4): string => {
    return `${address.substring(0, chars)}...${address.substring(address.length - chars)}`;
};

export const hexToDecimal = (hex: string) => parseInt(hex, 16);

export const delay = (time: number) => new Promise((response) => setTimeout(response, time));

/**
 * @description Formats a license number string add space after korean characters
 */
export const licenseNumberFormatter = (licenseNumber: string) => {
    const koreanRegex = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/;
    let formattedLicenseNumber = '';
    for (let i = 0; i < licenseNumber.length; i++) {
        if (koreanRegex.test(licenseNumber[i] ?? '') && !koreanRegex.test(licenseNumber[i + 1] ?? '')) {
            formattedLicenseNumber += `${licenseNumber[i]} `;
        } else {
            formattedLicenseNumber += licenseNumber[i];
        }
    }
    return formattedLicenseNumber;
};
