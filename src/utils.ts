function thousandsSeperated(x: number): string {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export function formatPrice(p: number) {
    return thousandsSeperated(p);
}