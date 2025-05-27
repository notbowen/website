{
  description = "Portfolio Site Dev Environment";

  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixos-unstable";
    flake-utils.url = "github:numtide/flake-utils";
  };

  outputs = { self, nixpkgs, flake-utils }:
    flake-utils.lib.eachDefaultSystem (system:
      let
        pkgs = import nixpkgs {
          inherit system;
        };

        bun = pkgs.bun;
      in {
        devShells.default = pkgs.mkShell {
          packages = [
            bun
            pkgs.nodejs_20
            pkgs.git
          ];

          # Optionally set environment variables
          shellHook = ''
            echo "Welcome to your Astro + Bun dev shell!"
            echo "Run \`bun install\` to install dependencies."
          '';
        };
      });
}

