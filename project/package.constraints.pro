constraints_min_node_version(16).
yarn_link_version(4, 7, 0).

% Forçar versões específicas para pacotes principais
gen_enforced_dependency(null, 'react', '18.2.0', _).
gen_enforced_dependency(null, 'react-dom', '18.2.0', _).
gen_enforced_dependency(null, 'next', '14.1.0', _).
gen_enforced_dependency(null, 'next-auth', '4.24.5', _).