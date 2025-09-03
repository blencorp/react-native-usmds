import { detect } from '@antfu/ni';
import { existsSync } from 'fs';
import path from 'path';

export type PackageManager = 'npm' | 'yarn' | 'pnpm' | 'bun';

export async function getPackageManager(targetDir: string): Promise<PackageManager> {
  // First check for lock files to determine the project's package manager
  if (existsSync(path.join(targetDir, 'bun.lockb'))) return 'bun';
  if (existsSync(path.join(targetDir, 'pnpm-lock.yaml'))) return 'pnpm';
  if (existsSync(path.join(targetDir, 'yarn.lock'))) return 'yarn';
  if (existsSync(path.join(targetDir, 'package-lock.json'))) return 'npm';

  
  // If no lock file exists, try to detect from environment
  try {
    const detected = await detect({ programmatic: true, cwd: targetDir });
    switch (detected) {
      case 'bun':
        return 'bun';
      case 'pnpm':
        return 'pnpm';
      case 'yarn@berry':
      case 'yarn':
        return 'yarn';
      default:
        return 'npm';
    }
  } catch {
    // If detection fails, return npm as fallback
    return 'npm';
  }
}

export function getInstallCommand(packageManager: PackageManager): {
  install: string[];
  installDev: string[];
  useExeca: boolean;
  isBun: boolean;
} {
  switch (packageManager) {
    case 'bun':
      return {
        install: ['add'],
        installDev: ['add', '-d'],
        useExeca: false,
        isBun: true
      };
    case 'pnpm':
      return {
        install: ['add'],
        installDev: ['add', '-D'],
        useExeca: true,
        isBun: false
      };
    case 'yarn':
      return {
        install: ['add'],
        installDev: ['add', '--dev'],
        useExeca: true,
        isBun: false
      };
    default:
      return {
        install: ['install'],
        installDev: ['install', '--save-dev'],
        useExeca: true,
        isBun: false
      };
  }
}
