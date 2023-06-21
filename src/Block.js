import {useState} from "react";

export const Block = ({ block }) => {
  console.log(block);
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <>
      {!isExpanded ? (
        <div
          className={'blockItem'}
          onClick={() => setIsExpanded(!isExpanded)}
        >
          <div>Hash: <span className={'item'}>{block.hash}</span> </div>
          <div>Timestamp: <span className={'item'}>{new Date(block.timestamp * 1000).toLocaleString()}</span></div>
          <div>Transactions: <span className={'item'}>{block.transactions.length}</span> </div>
          <div>Parent Hash: <span className={'item'}>{block.parentHash}</span> </div>
        </div>
      )
      : (
          <div
            className={'blockItem'}
            onClick={() => setIsExpanded(!isExpanded)}
          >
            <div>Hash: {block.hash}</div>
            <div>Timestamp: {block.timestamp}</div>
            <div>Transactions: {block.transactions.length}</div>
            <div>Parent Hash: {block.parentHash}</div>
            <div>Used Gas: {parseInt(block.gasUsed._hex, 16) / 10**9}</div>
            <div>Difficulty: {block.difficulty}</div>
            <div>Nonce: {block.nonce}</div>
            <div>Miner: {block.miner}</div>
            <div>Extra Data: {block.extraData}</div>

          </div>
        )
      }
    </>
  )

}
