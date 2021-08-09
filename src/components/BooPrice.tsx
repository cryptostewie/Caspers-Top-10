import useSWR from "swr"

export default function BooPrice() {
    const { data } = useSWR('https://api.casperdefi.com/v1/tokens/0x841fad6eae12c286d1fd18d1d525dffa75c7effe?chainId=250', {refreshInterval: 15})
    const price = data?.data?.token?.priceUSD
    
    return <div>{Number(data?.data?.token?.priceUSD).toFixed(2)}</div>
}