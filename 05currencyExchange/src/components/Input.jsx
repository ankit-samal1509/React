import React, {useId} from "react"

function InputBox({
    label,
    amount,
    currencyOptions = [],
    onAmountchange,
    onCurrencychange,    
    selectCurrency = "inr",
    amountDisable = false,
    currencyDisable = false,        
}) {
    const amountInputId = useId()
   

    return (
        <div className={"bg-white p-3 rounded-lg text-sm flex  "}>
            <div className="w-1/2">
                <label htmlFor = {amountInputId}
                 className="text-black/40 mb-2 inline-block">
                    {label}
                </label>
                <input
                    id = {amountInputId}
                    className="outline-m w-full bg-transparent py-1.5"
                    type="number"
                    placeholder="Amount"
                    readOnly = {amountDisable}
                    value = {amount}
                    onChange = {(evt) => onAmountchange && onAmountchange(Number(evt.target.value))}
                />
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black/40 mb-2 w-full">Currency Type</p>
                <select
                    className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                    value = {selectCurrency}
                    onChange = {(evt) => onCurrencychange && onCurrencychange(evt.target.value)}
                    disable = {currencyDisable}
                    
                >
                        {currencyOptions.map((currency) =>
                        (
                            <option key = {currency} value = {currency}>
                                {currency}
                            </option>

                        ))}                   
                        
                
                </select>
            </div>
        </div>
    );
}

export default InputBox;
