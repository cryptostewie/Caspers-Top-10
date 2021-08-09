import dayjs from "dayjs"
import useSWR from "swr"

export default function Table() {
    const { data:spirit } = useSWR('https://api.casperdefi.com/v1/tokens/0x5cc61a78f164885776aa610fb0fe1257df78e59b/swaps?chainId=250&exchange=spirit', {refreshInterval: 2})
    const { data:spooky } = useSWR('https://api.casperdefi.com/v1/tokens/0x841fad6eae12c286d1fd18d1d525dffa75c7effe/swaps?chainId=250&exchange=spooky', {refreshInterval: 2})

    const spiritSwaps = spirit?.data?.swaps || []
    const spookySwaps = spooky?.data?.swaps || []

    return <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
            {spiritSwaps.map((swap, index) => 
                <div key={index}  className="flex space-x-8 items-center">
                    <div>
                        <p>${Number(swap.amountUSD).toFixed(4)}</p>
                        <p className="text-xs">{dayjs.unix(swap.timestamp).format('hh:mm:ss')}</p>
                    </div>
                    <div>
                        <p>{swap.token0Symbol} &rarr; {swap.token1Symbol}</p>
                        <p className="text-xs opacity-50">{Number(swap.amount0In + swap.amount0Out).toFixed(2)} &rarr; {Number(swap.amount1In + swap.amount1Out).toFixed(2)}</p>
                    </div>
                    <div>{Number(swap.amount1In * swap.token1PriceUSD) > 100 ? '🐻' : ''}</div>
                    <div>{Number(swap.amount0In * swap.token0PriceUSD) > 100 ? '🐳' : ''}</div>
                </div>
            )}
        </div>
        <div className="space-y-2">
            {spookySwaps.map((swap, index) => 
                <div key={index}  className="flex md:justify-end space-x-8 items-center">
                    <div>
                        <p>${Number(swap.amountUSD).toFixed(4)}</p>
                        <p className="text-xs">{dayjs.unix(swap.timestamp).format('hh:mm:ss')}</p>
                    </div>
                    <div>
                        <p>{swap.token0Symbol} &rarr; {swap.token1Symbol}</p>
                        <p className="text-xs opacity-50">{Number(swap.amount0In + swap.amount0Out).toFixed(2)} &rarr; {Number(swap.amount1In + swap.amount1Out).toFixed(2)}</p>
                    </div>
                    <div>{Number(swap.amount1In * swap.token1PriceUSD) > 100 ? '🐻' : ''}</div>
                    <div>{Number(swap.amount0In * swap.token0PriceUSD) > 100 ? '🐳' : ''}</div>
                </div>
            )}
        </div>
    </div>
}