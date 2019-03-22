import Mock from 'mockjs';

Mock.setup({
    timeout: '350-600',
});
const Random = Mock.Random;

function getBillInfo() {
    return Mock.mock({
        code: 200,
        success: true,
        data: {
            id: () => Random.integer(0, 999),
            uid: () => Random.integer(0, 999),
            arrival_time: () => new Date().getTime(),
            amount: () => Random.integer(0, 999),
            remark_code: () => Random.integer(0, 999),
            state: () => Random.integer(1, 10),
            name: () => Random.word(3, 5),
            bank_account_name: () => Random.word(3, 5),
        },
    });
}

function post() {
    return Mock.mock({
        code: 200,
        data: null,
        message: null,
        success: true,
    });
}

Mock.mock(/\/legal\/receipt\/bill_info/, 'get', getBillInfo);
Mock.mock(/\/legal\/receipt\/bill_match/, 'post', post);
Mock.mock(/\/legal\/receipt\/recharge_cancel/, 'post', post);
Mock.mock(/\/legal\/receipt\/recharge_revert/, 'post', post);
Mock.mock(/\/legal\/customer\/delete/, 'post', post);
Mock.mock(/\/legal\/customer\/add/, 'post', post);

export default Mock;
