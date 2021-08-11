import dayjs from "dayjs"
import useSWR from "swr"
import classNames from 'classnames'


export default function Table() {
    const { data:spirit } = useSWR('https://api.casperdefi.com/v1/tokens/0x5cc61a78f164885776aa610fb0fe1257df78e59b/swaps?chainId=250&exchange=spirit', {refreshInterval: 2})
    const { data:spooky } = useSWR('https://api.casperdefi.com/v1/tokens/0x841fad6eae12c286d1fd18d1d525dffa75c7effe/swaps?chainId=250&exchange=spooky', {refreshInterval: 2})

    const spiritSwaps = spirit?.data?.swaps || []
    const spookySwaps = spooky?.data?.swaps || []
    
    return <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2 bg-gray-800 rounded-md border-2 border-indigo-600 pt-6 pb-6 shadow-inner">
            {spiritSwaps.map((swap, index) => 
                <div key={index}  className="flex justify-center space-x-4">
                    <div>
                        <p className={classNames('', swap.amount1Out > 0 ? 'text-green-400' : 'text-red-400')}>${Number(swap.amountUSD).toFixed(2)}</p>
                        <p className="text-xs">{dayjs.unix(swap.timestamp).format('hh:mm:ss')}</p> 
                    </div>
                    <div>
                        <p>{swap.token0Symbol} &rarr; {swap.token1Symbol}</p>
                        <p className="text-xs opacity-50">{Number(swap.amount0In + swap.amount0Out).toFixed(2)} &rarr; {Number(swap.amount1In + swap.amount1Out).toFixed(2)}</p>
                    </div>
                    
                    <div>{Number(swap.amount1In * swap.token1PriceUSD) > 1000 ? '🐻' : ''}</div>
                    <div>{Number(swap.amount0In * swap.token0PriceUSD) > 1000 ? '🐳' : ''}</div>        
                    <div>{Number(swap.amountUSD) < 1 ? '🤖' : ''}</div> 
                </div>
                
                
            )}
            
        </div>
        <div className="space-y-2 bg-gray-800 rounded-md border-2 border-indigo-600 pt-6 pb-6">
            {spookySwaps.map((swap, index) => 
                <div key={index}  className="flex justify-center space-x-4">
                    <div>
                        <p className={classNames('', swap.amount1Out > 0 ? 'text-green-400' : 'text-red-400')}>${Number(swap.amountUSD).toFixed(2)}</p>
                        <p className="text-xs">{dayjs.unix(swap.timestamp).format('hh:mm:ss')}</p>
                    </div>
                    <div>
                        <p>{swap.token0Symbol} &rarr; {swap.token1Symbol}</p>
                        <p className="text-xs opacity-50">{Number(swap.amount0In + swap.amount0Out).toFixed(1)} &rarr; {Number(swap.amount1In + swap.amount1Out).toFixed(2)}</p>
                    </div>
                    <div>{Number(swap.amount1In * swap.token1PriceUSD) > 1000 ? '🐻' : ''}</div>
                    <div>{Number(swap.amount0In * swap.token0PriceUSD) > 1000 ? '🐳' : ''}</div>
                    <div>{Number(swap.amountUSD) < 1 ? '🤖' : ''}</div> 
                </div>
            )}
        </div>
    </div>
}