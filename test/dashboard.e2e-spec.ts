import { expect, test } from '@playwright/test'

test('display day orders amount metric', async ({ page }) => {
  await page.goto('/', { waitUntil: 'networkidle' })

  expect(page.getByText('20', { exact: true })).toBeVisible()
  expect(
    page.getByText('-5% em relação a ontem', { exact: true }),
  ).toBeVisible()
})

test('display month orders amount metric', async ({ page }) => {
  await page.goto('/', { waitUntil: 'networkidle' })

  expect(page.getByText('200', { exact: true })).toBeVisible()
  expect(
    page.getByText('7% em relação ao mês passado', { exact: true }),
  ).toBeVisible()
})

test('display month canceled orders amount metric', async ({ page }) => {
  await page.goto('/', { waitUntil: 'networkidle' })

  expect(page.getByText('5', { exact: true })).toBeVisible()
  expect(
    page.getByText('+7% em relação ao mês passado', { exact: true }),
  ).toBeVisible()
})

test('display month revenue metric', async ({ page }) => {
  await page.goto('/', { waitUntil: 'networkidle' })

  await page.waitForTimeout(1000)

  // expect(page.getByText('R$ 200,00', { exact: true })).toBeVisible()
  // expect(
  //   page.getByText('10% em relação ao mês passado', { exact: true }),
  // ).toBeVisible()
})
