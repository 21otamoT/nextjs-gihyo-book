import {render,screen,fireEvent,RenderResult} from '@testing-library/react'
import Button from '.'
import { afterEach, beforeEach, it } from 'node:test'
import { expect } from '@storybook/test'

describe('Button', () => {
  let renderResult: RenderResult
  let handleClick: jest.Mock

  beforeEach(() => {
    //ダミー関数
    handleClick = jest.fn()
    renderResult = render(
      <Button variant="primary" onClick={handleClick}>
        Button
      </Button>
    )
  })

  afterEach(() => {
    renderResult.unmount()
  })

  it('ボタンを押した時にonClickが呼ばれる', () => {
    //ボタンが一回クリックされたかどうか確認
    fireEvent.click(screen.getByText('Button'))
    expect(handleClick).toHaveBeenCalledTimes(1)
  })
})