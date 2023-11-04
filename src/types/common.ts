interface code {
  code: 200 | 201 | 204 | 400 | 401 | 403 | 500;
}

interface links {
  links: link[];
}

interface link {
  rel: string;
  href: string;
}

export type { code, links };
