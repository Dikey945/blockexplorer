import {Block} from "./Block";

export const BlockList = ({ blocks }) => {
  console.log(blocks);
  return (
    <div>
      <ul className={'blockList'}>
        {blocks.map(block => (
          <li key={block.hash}>
            <Block block={block} />
          </li>
        ))}
      </ul>
    </div>
  )

}